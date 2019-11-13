# Introduction

<div id="gitalk-container"></div>

<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
<script>
    const gitalk = new Gitalk({
    clientID: '8467726bf36fa0a756e5',
    clientSecret: '796e869f94f37108da19078471a255b570cfdd91',
    repo: 'https://github.com/takeToDreamLand/demotalk.io.git',
    owner: 'takeToDreamLand',
    admin: ['takeToDreamLand'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
    });
    gitalk.render('gitalk-container')
</script>
