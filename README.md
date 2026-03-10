# Daytona Compute Speakers Scraper

An Apify Actor that scrapes the speakers list from the [Daytona Compute](https://compute.daytona.io/) conference website.

## What It Does

This Actor extracts information about all speakers from the Daytona Compute conference website, including their names, titles, headshot photos, and company logos. The scraper automatically handles duplicate entries (the website contains multiple responsive variants per speaker) and filters out non-speaker elements like agenda time slots.

**Target Website**: https://compute.daytona.io/

**Technology**: Built with [Crawlee](https://crawlee.dev/) and CheerioCrawler for efficient DOM parsing.

## Input

This Actor requires **no input parameters**. Simply run it and it will scrape the speakers from the Daytona Compute conference website.

## Output

The Actor saves speaker data to the Apify dataset. Each speaker is represented as a JSON object with the following structure:

### Output Schema

```json
{
    "name": "John Doe",
    "title": "Co-founder and CEO of Example Inc.",
    "photoUrl": "https://example.com/photos/john-doe.jpg",
    "companyLogoUrl": "https://example.com/logos/example-inc.png"
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | **Yes** | Full name of the speaker |
| `title` | string | **Yes** | Role and company of the speaker (e.g., "Co-founder and CEO of Daytona") |
| `photoUrl` | string (URI) | No | URL of the speaker's headshot photo. May be `undefined` if not available. |
| `companyLogoUrl` | string (URI) | No | URL of the speaker's company logo. May be `undefined` if not available. |

### Example Output

```json
[
    {
        "name": "Ivan Burazin",
        "title": "Co-founder and CEO of Daytona",
        "photoUrl": "https://framerusercontent.com/images/...",
        "companyLogoUrl": "https://framerusercontent.com/images/..."
    },
    {
        "name": "Jane Smith",
        "title": "VP of Engineering at TechCorp",
        "photoUrl": "https://framerusercontent.com/images/...",
        "companyLogoUrl": "https://framerusercontent.com/images/..."
    }
]
```

## Usage

### On Apify Platform

1. Navigate to the Actor in the Apify Store
2. Click **Try for Free**
3. Click **Start** (no input configuration needed)
4. Wait for the Actor to finish
5. Download results in JSON, CSV, Excel, or other formats

### Via API

```bash
curl "https://api.apify.com/v2/acts/YOUR_USERNAME~daytona-speakers/runs" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

### Programmatically (Node.js)

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'YOUR_API_TOKEN',
});

const run = await client.actor('YOUR_USERNAME/daytona-speakers').call();
const { items } = await client.dataset(run.defaultDatasetId).listItems();

console.log(items);
```

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

```bash
# Clone or download the repository
git clone <repository-url>
cd daytona-speakers

# Install dependencies
npm install
```

### Running Locally

```bash
# Development mode (with hot reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

### Available Scripts

- `npm start` - Alias for `start:dev`
- `npm run start:dev` - Run in development mode with tsx
- `npm run start:prod` - Run compiled production build
- `npm run build` - Compile TypeScript to JavaScript
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## How It Works

1. **Navigate** to https://compute.daytona.io/
2. **Find** all elements with `data-framer-name` starting with "Speaker"
3. **Extract** speaker data from each card:
   - Name and title from `RichTextContainer` elements
   - Headshot from `img[alt="Base image"]`
   - Company logo from the last non-headshot image
4. **Deduplicate** speakers (the website has multiple responsive variants per speaker)
5. **Filter** out agenda time slots that reuse the same component structure
6. **Save** all speakers to the Apify dataset

## Error Handling

- If no speakers are found, the Actor logs a warning: "No speakers found. The page structure may have changed."
- The scraper gracefully handles missing images (returns `undefined` for URLs)
- Duplicate speaker entries are automatically filtered out

## Limitations

- The Actor is specifically designed for the Daytona Compute conference website structure
- If the website structure changes significantly, the Actor may need updates
- Image URLs are extracted as-is from the website (no validation or downloading)

## Maintenance

If the Actor stops working or returns no results:

1. Check if the website structure has changed by visiting https://compute.daytona.io/
2. Inspect the HTML structure of speaker cards
3. Update the selectors in `src/main.ts` if needed:
   - Line 28: `[data-framer-name^="Speaker"]` - main speaker card selector
   - Line 32: `[data-framer-component-type="RichTextContainer"]` - name and title
   - Line 42: `img[alt="Base image"]` - headshot photo

## Support

For issues, feature requests, or questions:
- Create an issue in the repository
- Contact the Actor maintainer via Apify

## License

[Add your license here]

## Version History

- **0.0.1** - Initial MVP release
  - Basic speaker scraping functionality
  - Deduplication of responsive variants
  - Extraction of names, titles, photos, and company logos
