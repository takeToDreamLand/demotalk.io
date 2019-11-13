if(gitalk)
{
    let gitalk = new Gitalk({
        clientID: '8467726bf36fa0a756e5',
        clientSecret: '796e869f94f37108da19078471a255b570cfdd91',
        repo: 'https://github.com/takeToDreamLand/demotalk.io.git',
        owner: 'takeToDreamLand',
        admin: ['takeToDreamLand'],
        id: windows.location.pathname,
        distractionFreeMode: false
    });
    gitalk.render('gitalk-container')
}else{
    gitalk.render('gitalk-container')
}