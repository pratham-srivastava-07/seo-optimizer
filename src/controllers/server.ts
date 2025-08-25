export default async function serverSideController(req: any, res: any): Promise<any> {
    try {
        const { url } = req.body;
        const result = await ssrHelper(url)
        res.status(200).json(result)
    }
    catch(err) {
        res.status(500).json(`Internal server error occured ${err}`)
    }
} 

async function ssrHelper(url: any): Promise<any> {
    const response = await fetch(url)
    const html = await response.text()

    const hasTitle = /<title>(.*?)<\/title>/i.test(html);
    const hasContent = /<(p|h1|h2|article)[^>]*>.*?<\/\1>/i.test(html);

    return {
        ssrEnabled: hasTitle && hasContent,
        details: {hasContent, hasTitle}
    }
}