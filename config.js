const config = {
    "ownerID": "282453998529806338", //kendi IDınızı yazınız
    "admins": ["1056992330927833129"],
    "support": ["1056992330927833129"],
    "token": "MTA0NTc2NDg1ODc3NzQ0NDQ1Mw.GJTvAx.vpH7hs4rjNvK_l2cL5K_I2_B6gQlTXXxRuXb1w", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "", //botunuzun secretini yazınız
      "callbackURL": `https://dash.vortexbot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.vortexbot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;