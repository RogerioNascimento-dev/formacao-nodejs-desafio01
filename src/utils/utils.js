export class Utils{

    buildRoutePatch(path)
    {
        const parametersRegex = /:([a-zA-Z]+)/g;
        const pathWithParams  = path.replace(parametersRegex, '(<$1>[a-z0-9\-_]+)');
        const pathRegex       = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);
        return pathRegex;
    }

    extractQueryParams(query)
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
}