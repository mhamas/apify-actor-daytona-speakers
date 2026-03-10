import { setTimeout } from 'node:timers/promises';

import { CheerioCrawler, Dataset } from '@crawlee/cheerio';
import { Actor } from 'apify';

interface Speaker {
    name: string;
    title: string;
    photoUrl: string | undefined;
    companyLogoUrl: string | undefined;
}

await Actor.init();

Actor.on('aborting', async () => {
    await setTimeout(1000);
    await Actor.exit();
});

const crawler = new CheerioCrawler({
    requestHandler: async ({ $, log }) => {
        const seenNames = new Set<string>();
        const speakers: Speaker[] = [];

        // Each speaker card has data-framer-name starting with "Speaker"
        // The page contains multiple responsive variants (desktop/tablet/mobile) per speaker,
        // so we deduplicate by name.
        $('[data-framer-name^="Speaker"]').each((_index, element) => {
            const card = $(element);

            // Extract text from RichTextContainer elements - first is name, second is title
            const richTextContainers = card.find('[data-framer-component-type="RichTextContainer"]');
            const name = richTextContainers.eq(0).text().trim();
            const title = richTextContainers.eq(1).text().trim();

            // Skip empty names, duplicates, and agenda time slots that reuse the same component
            const isTimeSlot = /^\d{2}:\d{2}/.test(name);
            if (!name || isTimeSlot || seenNames.has(name)) return;
            seenNames.add(name);

            // Headshot: img with alt="Base image"
            const photoUrl = card.find('img[alt="Base image"]').attr('src') || undefined;

            // Company logo: the last image container (not Base/Pixelated image)
            const allImages = card.find('img');
            let companyLogoUrl: string | undefined;
            allImages.each((_i, img) => {
                const alt = $(img).attr('alt') || '';
                if (alt !== 'Base image' && alt !== 'Pixelated image') {
                    companyLogoUrl = $(img).attr('src') || undefined;
                }
            });

            speakers.push({ name, title, photoUrl, companyLogoUrl });
            log.info(`Found speaker: ${name} ${title} ${photoUrl} ${companyLogoUrl}`);
        });

        log.info(`Found ${speakers.length} speakers`);

        if (speakers.length === 0) {
            log.warning('No speakers found. The page structure may have changed.');
            return;
        }

        await Dataset.pushData(speakers);
    },
});

await crawler.run(['https://compute.daytona.io/']);

await Actor.exit();
