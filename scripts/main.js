
$('document').ready(function(){
        
    var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","RobotCaleb"];
    console.log("Inside array");
    var url = "https://api.twitch.tv/kraken/streams?client_id=nv86pr7en42eh66xwbalnj68xzma8m";
    $.getJSON(url,function(data) {
        var keys = Object.keys(data.streams[0]);
        var str = JSON.stringify(data);
        
        data.streams.forEach(function(streamer) {
            var game = streamer.channel.game;
            var viewers = streamer.viewers;
            var logo_html = '<img src = "'+streamer.channel.logo+'" style="width:100px;height:80px;" >';
            var name = streamer.channel.name;
            console.log(logo_html);
            $("#json-data").append("<tr><th>"+logo_html+"</th><th>"+name+"</th><th>"+game+"</th><th>"+viewers+"</th></tr>");
        });
        
        
        var img_link = data.streams[0].channel.logo;
        console.log(img_link);
    });
});
/**
{
        "_id":26088571904,
        "game":"PLAYERUNKNOWN'S BATTLEGROUNDS",
        "viewers":28521,
        "video_height":900,
        "average_fps":60,
        "delay":0,
        "created_at":"2017-08-24T01:30:57Z",
        "is_playlist":false,
        "stream_type":"live",
        "preview": {
            "small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-80x45.jpg",
            "medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-320x180.jpg",
            "large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-640x360.jpg",
            "template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-{width}x{height}.jpg"
        }
        ,
        "channel": {
            "mature":true,
            "partner":false,
            "status":"SORRY IM HERE | Follow https://twitter.com/c9shroud",
            "broadcaster_language":"en",
            "display_name":"shroud",
            "game":"PLAYERUNKNOWN'S BATTLEGROUNDS",
            "language":"en",
            "_id":37402112,
            "name":"shroud",
            "created_at":"2012-11-03T15:50:32Z",
            "updated_at":"2017-08-24T09:33:58Z",
            "delay":null,
            "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/shroud-profile_image-850e059aee3d6bfa-300x300.jpeg",
            "banner":null,
            "video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/01f5ca6e0e437209-channel_offline_image-1920x1080.png",
            "background":null,
            "profile_banner":null,
            "profile_banner_background_color":"",
            "url":"https://www.twitch.tv/shroud",
            "views":42567414,
            "followers":1136161,
            "_links": {
                "self": "https://api.twitch.tv/kraken/channels/shroud", "follows": "https://api.twitch.tv/kraken/channels/shroud/follows", "commercial": "https://api.twitch.tv/kraken/channels/shroud/commercial", "stream_key": "https://api.twitch.tv/kraken/channels/shroud/stream_key", "chat": "https://api.twitch.tv/kraken/chat/shroud", "features": "https://api.twitch.tv/kraken/channels/shroud/features", "subscriptions": "https://api.twitch.tv/kraken/channels/shroud/subscriptions", "editors": "https://api.twitch.tv/kraken/channels/shroud/editors", "teams": "https://api.twitch.tv/kraken/channels/shroud/teams", "videos": "https://api.twitch.tv/kraken/channels/shroud/videos"
            }
        }
 **/








