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

## Use Cases

### Event Marketing
Extract speaker profiles to create promotional materials, social media posts, and email campaigns.

### Attendee Research
Build a database of speakers to help attendees plan which sessions to attend based on speaker backgrounds.

### Conference Analysis
Analyze speaker diversity, company representation, and industry trends across multiple conferences.

### Data Integration
Feed speaker data into CRMs, marketing automation tools, or custom applications via the Apify API.
