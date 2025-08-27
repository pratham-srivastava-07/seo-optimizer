export default async function robotController(req: any, res: any): Promise<any> {
    try {
        const { url } = req.body;

        const result = await robotHelper(url);

        res.status(200).json(result)

    } catch(err: any) {
        res.status(500).json(`Internal Server error occured ${err}`)
    }
}

async function robotHelper(url: any): Promise<any> {
    const newUrl = new URL("/robots.txt", url).toString()
    const response = await fetch(newUrl);

    if (!response.ok) {
        return { robots_txt_found: false, status: response.status };
    }

    const text = await response.text()

    let allows: any = [], disAllows: any=[]

    text.split("\n").forEach((line: any) => {
        if (line.startsWith("Allow:")) allows.push(line.split(":")[1].trim());
        if (line.startsWith("Disallow:")) disAllows.push(line.split(":")[1].trim());
    });

    return {
        robots_txt_found: true,
        allows,
        disAllows
    };
}