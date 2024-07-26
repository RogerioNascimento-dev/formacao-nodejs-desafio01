

export function buildRoutePath(path)
{
    const parametersRegex = /:([a-zA-Z]+)/g;
    const pathWithParams  = path.replace(parametersRegex, '(?<$1>[a-z0-9\-_]+)');                                
    const pathRegex       = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);
    return pathRegex;
}

export function extractQueryParams(query)
{
    query = query.substr(1);
    query = query.split('&');
    const queryParams = query.reduce((queryParams, param) =>{
    const [key, value] = param.split('=');
    queryParams[key] = value;
    return queryParams;
}, {});

return queryParams;
}

export function now(){
    const now     = new Date();
    const year    = now.getFullYear();
    const month   = String(now.getMonth() + 1).padStart(2, '0');
    const day     = String(now.getDate()).padStart(2, '0');
    const hours   = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;        
}
