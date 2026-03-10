# Daytona Compute Speakers Scraper

Extract all speaker information from the [Daytona Compute](https://compute.daytona.io/) conference website in seconds. Get names, titles, headshot photos, and company logos of all conference speakers in structured JSON format.

## Features

- ✅ **Zero configuration needed** - Just run and get results
- 📊 **Structured data** - Clean JSON output ready for analysis
- 🖼️ **Complete profiles** - Names, titles, photos, and company logos
- ⚡ **Fast and efficient** - Scrapes all speakers in under 30 seconds
- 🔄 **Automatic deduplication** - Handles responsive page variants automatically

## What You Get

This Actor extracts the following information for each speaker:

- **Full name** - Speaker's complete name
- **Title** - Professional role and company (e.g., "Co-founder and CEO of Daytona")
- **Headshot photo** - Direct URL to speaker's profile image
- **Company logo** - Direct URL to the speaker's company logo

Perfect for:
- Conference planners building speaker databases
- Marketing teams creating promotional materials
- Attendees researching speakers before the event
- Data analysts studying conference trends

## How to Use

### On Apify Platform

1. Click **Try for Free** or **Start**
2. No configuration needed - just click **Start**
3. Wait 20-30 seconds for the Actor to finish
4. Download your results in JSON, CSV, Excel, HTML, or RSS formats

That's it! No input parameters required.

## Output

The Actor returns an array of speaker objects in this format:

```json
{
    "name": "Ivan Burazin",
    "title": "Co-founder and CEO of Daytona",
    "photoUrl": "https://framerusercontent.com/images/...",
    "companyLogoUrl": "https://framerusercontent.com/images/..."
}
```

### Output Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Full name of the speaker |
| `title` | string | Professional role and company affiliation |
| `photoUrl` | string | Direct URL to speaker's headshot (may be null if unavailable) |
| `companyLogoUrl` | string | Direct URL to company logo (may be null if unavailable) |

### Example Output

```json
[
    {
        "name": "Ivan Burazin",
        "title": "Co-founder and CEO of Daytona",
        "photoUrl": "https://framerusercontent.com/images/speaker-1.jpg",
        "companyLogoUrl": "https://framerusercontent.com/images/logo-daytona.png"
    },
    {
        "name": "Jane Smith",
        "title": "VP of Engineering at TechCorp",
        "photoUrl": "https://framerusercontent.com/images/speaker-2.jpg",
        "companyLogoUrl": "https://framerusercontent.com/images/logo-techcorp.png"
    }
]
```

## Integration

### API Integration

Call the Actor programmatically using the Apify API:

```bash
curl "https://api.apify.com/v2/acts/YOUR_USERNAME~daytona-speakers/runs" \
  -X POST \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

### JavaScript/Node.js

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_API_TOKEN' });
const run = await client.actor('YOUR_USERNAME/daytona-speakers').call();
const { items } = await client.dataset(run.defaultDatasetId).listItems();

console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient('YOUR_API_TOKEN')
run = client.actor('YOUR_USERNAME/daytona-speakers').call()
items = client.dataset(run['defaultDatasetId']).list_items().items

print(items)
```

## Pricing and Performance

### Compute Units

This Actor is extremely efficient:
- **Average run time**: 20-30 seconds
- **Compute units per run**: ~0.01 CU
- **Cost per run**: Less than $0.001

With Apify's free tier (5 CU/month), you can run this Actor **500+ times per month** at no cost.

### Performance

- ⚡ **Speed**: Completes in under 30 seconds
- 📦 **Data volume**: Extracts 20-50 speakers (varies by conference)
- 💰 **Cost-effective**: Minimal compute unit consumption
- 🔄 **Reliable**: Built on proven Crawlee framework

## Tips and Best Practices

### Getting the Best Results

- **Run regularly** - Conference speaker lineups may be updated periodically
- **Check for updates** - Visit the conference website to see when new speakers are announced
- **Export formats** - Use JSON for API integration, CSV/Excel for spreadsheet analysis

### Cost Optimization

This Actor is already highly optimized and uses minimal resources. No special configuration needed to reduce costs.

## Use Cases

### Event Marketing
Extract speaker profiles to create promotional materials, social media posts, and email campaigns.

### Attendee Research
Build a database of speakers to help attendees plan which sessions to attend based on speaker backgrounds.

### Conference Analysis
Analyze speaker diversity, company representation, and industry trends across multiple conferences.

### Data Integration
Feed speaker data into CRMs, marketing automation tools, or custom applications via the Apify API.

## FAQ

### Do I need to provide any input?
No! This Actor requires zero configuration. Just click Start and it will scrape all speakers from the Daytona Compute website.

### How often is the data updated?
The Actor scrapes live data from the conference website each time you run it, so you always get the most current speaker list.

### What if a speaker has no photo or company logo?
The Actor will return `null` or omit the field if an image is not available on the website.

### Can I scrape other conference websites?
This Actor is specifically designed for the Daytona Compute conference website. For other conferences, you would need a different Actor or a custom solution.

### What format can I download the results in?
Apify supports multiple export formats: JSON, CSV, Excel, HTML, RSS, and XML.

### Is this legal?
Yes. The Actor scrapes publicly available information from the conference website for legitimate purposes like research and analysis.

## Related Actors

Looking for similar functionality? Check out these related Actors:

- **[Website Content Crawler](https://apify.com/apify/website-content-crawler)** - Scrape content from any website
- **[Cheerio Scraper](https://apify.com/apify/cheerio-scraper)** - Fast HTML scraping for developers
- **[Web Scraper](https://apify.com/apify/web-scraper)** - Flexible scraper with JavaScript rendering

## Support

Need help or have questions?

- 📧 **Email**: [Create an issue on GitHub or contact via Apify]
- 📚 **Apify Documentation**: [docs.apify.com](https://docs.apify.com)
- 💬 **Apify Community**: [community.apify.com](https://community.apify.com)

---

Built with ❤️ using [Crawlee](https://crawlee.dev/) and the [Apify platform](https://apify.com).
