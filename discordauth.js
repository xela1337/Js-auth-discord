let requestPayload = {redirect_uri, client_id: clientID, grant_type: "authorization_code", client_secret: clientSecret, code: request.query.code};
unirest.post("https://discordapp.com/api/oauth2/token").send(requestPayload).headers({"Content-Type": 'application/x-www-form-urlencoded', "User-Agent": 'DiscordBot'})
unirest.get("https://discordapp.com/api/users/@me").headers({"Authorization": `${data.body.token_type} ${data.body.access_token}`})