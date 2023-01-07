
function log(text, params = {
        textColor: 'black',
        backgroundColor: 'white',
        textSize: '12'
    }) {
    var parameters = "";
    for (const [param, paramV] of Object.entries(params)){
        if(param === "textColor"){
            parameters += "color: " + paramV + ";";
        }
        if(param === "backgroundColor"){
            parameters += "background-color: " + paramV + ";";
        }
        if(param === "textSize"){
            parameters += "font-size: " + paramV + "px;";
        }
    }
    console.log('%c' + text, parameters);
}

function badge(badgeText, text, badgeParams = {
    color: 'black',
    size: '12',
    borderColor: 'black',
    borderRadius: '50',
    backgroundColor: 'orange'
}) {
    var parameters = "";
    for (const [param, paramV] of Object.entries(badgeParams)){
        if(param === "color"){
            parameters += "color: " + paramV + ";";
        }
        if(param === "size"){
            parameters += "font-size: " + paramV + "px;";
        }
        if(param === "borderColor"){
            parameters += "border-color: " + paramV + ";";
        }
        if(param === "borderRadius"){
            parameters += "border-radius: " + paramV + "px;";
        }
        if(param === "backgroundColor"){
            parameters += "background-color: " + paramV + ";";
        }
    }
    console.log('%c' + badgeText + "%c" + text, parameters);
    /*console.log('%c' + badgeText,
        'border: 2px solid ' + badgeParams.borderColor +
        ';color: ' + badgeParams.color +
        "; font-size: " + badgeParams.size +
        "px; background-color: " + badgeParams.backgroundColor +
        ";border-radius:" + badgeParams.borderRadius +
        "px;padding-left:4px;padding-right:4px;padding-top:1px;padding-bottom:1px;",
        text)*/
}
function shieldsIo(text1, text2, badgeParams = {
    height: '1',
    bgColor1: '#555555',
    bgColor2: '#97ca00',
    textColor1: 'white',
    textColor2: 'white',
    borderRadiusTopLeft: '0',
    borderRadiusTopRight: '0',
    borderRadiusBottomLeft: '0',
    borderRadiusBottomRight: '0',
    paddingTop: '11',
    paddingBottom: '10',
    paddingLeft: '12',
    paddingRight: '12'
}) {
    console.log('%c' + text1 + "%c" + text2,
        //part 1
        'background: ' + badgeParams.bgColor1 + ";" +
        'height: ' + badgeParams.height + "px;" +
        'color: ' + badgeParams.textColor1 + ';' +
        'padding-top: 11px; padding-bottom: 10px; padding-left: 12px; padding-right: 12px;' +
        'border-radius: ' + badgeParams.borderRadiusTopLeft + 'px 0 0 ' + badgeParams.borderRadiusBottomLeft + 'px;',
        //part 2
        'background: ' + badgeParams.bgColor2 + ";" +
        'height: ' + badgeParams.height + "px;" +
        'color: ' + badgeParams.textColor2 + ';' +
        'padding-top: 11px; padding-bottom: 10px; padding-left: 12px; padding-right: 12px;' +
        'border-radius: 0 ' + badgeParams.borderRadiusTopRight + 'px ' + badgeParams.borderRadiusBottomRight + 'px 0;'
    )
}

function customCss(text, css) {
    console.log('%c' + text, css);
}