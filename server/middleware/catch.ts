export default eventHandler(async (event) => {
    console.log("-------------------------")
    const reqUrl = getRequestURL(event)
    console.log("SERVER MIDDLEWARE - PATHNAME", reqUrl.pathname)
  
    // const cookie = getCookie(event, 'test');
    const cookie = getCookie(event, 'test') ? getCookie(event, 'test') : event.context?.cookie;
    
    console.log("Event.context.cookie middleware:", cookie);
    if (!cookie) {
      console.log("SERVER MIDDLEWARE - NO COOKIE")
      event.context.cookie = 'test=123';
      setCookie(event, 'test', '123')
    }
    console.log("-------------------------")
  })