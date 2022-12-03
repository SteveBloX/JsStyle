
function log(text,
                 params = {

      color: 'black',
      size: '12'

        }
)
{


  console.log('%c' + text, 'color: ' + params.color + "; font-size: " + params.size + "px;");


}

function badge(
    badgeText,
    text,
    badgeParams =
        {
        color: 'black',
        size: '12',
        borderColor: 'black',
        backgroundColor: 'orange'
        }
)
{

  console.log('%c' + badgeText,
      'border: 2px solid ' + badgeParams.borderColor +
      ';color: ' + badgeParams.color +
      "; font-size: " + badgeParams.size +
      "px; background-color: " + badgeParams.backgroundColor +
      ";border-radius:50px;padding-left:4px;padding-right:4px;padding-top:1px;padding-bottom:1px;",
      text)

}
