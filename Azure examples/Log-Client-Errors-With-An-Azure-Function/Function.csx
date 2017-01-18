#r "Microsoft.WindowsAzure.Storage"

using System.Net;
using Microsoft.WindowsAzure.Storage.Table;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, ICollector<ClientError> outTable)
{
    dynamic data = await req.Content.ReadAsAsync<object>();
    var error = data?.error;
    var url = data?.url;

    if (error == null)
    {
        return req.CreateResponse(HttpStatusCode.BadRequest);
    }

    outTable.Add(new ClientError()
    {
        PartitionKey = url,
        RowKey = Guid.NewGuid().ToString(),
        Name = error.name,
        Message = error.message,
        File = error.file,
        Row = error.row,
        Column = error.column,
        UserAgent = req.Headers.UserAgent.ToString()
    });

    return req.CreateResponse(HttpStatusCode.Created);
}

public class ClientError : TableEntity
{
    public string Name { get; set; }

    public string Message { get; set; }

    public string File { get; set; }

    public int Row { get; set; }

    public int Column { get; set; }

    public string UserAgent { get; set; }
}