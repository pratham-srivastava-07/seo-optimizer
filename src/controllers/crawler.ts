export default async function crawlerController(req: any, res: any): Promise<any> {
    try {
        const { url } = req.body;
        const result = await crawlers(url);
        res.status(200).json(result)
    } catch(err: any) {
        res.status(500).json(`Internal server error occured ${err}`)
    }
}

async function crawlers(url: any): Promise<any> {
    const response = await fetch(url);
    const html = await response.text();

    const metaRobots: any = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);

    return {
    meta_robots: metaRobots ? metaRobots[1] : "not set",
    crawler_friendly: metaRobots ? !metaRobots[1].includes("noindex") : true
    };
}