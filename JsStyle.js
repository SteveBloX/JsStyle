
function log(text, params = {
    color: 'black',
    size: '12'
}) {
    console.log('%c' + text, 'color: ' + params.color + "; font-size: " + params.size + "px;");
}

function badge(badgeText, text, badgeParams = {
    color: 'black',
    size: '12',
    borderColor: 'black',
    borderRadius: '50',
    backgroundColor: 'orange'
}) {
    console.log('%c' + badgeText,
        'border: 2px solid ' + badgeParams.borderColor +
        ';color: ' + badgeParams.color +
        "; font-size: " + badgeParams.size +
        "px; background-color: " + badgeParams.backgroundColor +
        ";border-radius:" + badgeParams.borderRadius +
        "px;padding-left:4px;padding-right:4px;padding-top:1px;padding-bottom:1px;",
        text)
}
function shieldsIo(text1, text2, badgeParams = {
    bgColor1: '#555555',
    bgColor2: '#97ca00',
    textColor1: 'white',
    textColor2: 'white',
    borderRadiusTopLeft: '0',
    borderRadiusTopRight: '0',
    borderRadiusBottomLeft: '0',
    borderRadiusBottomRight: '0'
}) {
    console.log('%c' + text1 + "%c" + text2,
        //part 1
        'background: ' + badgeParams.bgColor1 + ";" +
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