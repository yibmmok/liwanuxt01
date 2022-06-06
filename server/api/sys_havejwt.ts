import type { IncomingMessage, ServerResponse } from "http"
import * as url from "url"
export default async (req: IncomingMessage, res: ServerResponse) => {

    const queryObject = url.parse(req.url as string, true).query
    let data = {data:[{data: ""}]}

    const {param} = queryObject

    if (param){
        data = await $fetch(`http://localhost:8102/sys_initJWT.php?jwttoken=${param}`)
    }
    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify(data))
    res.end()
}