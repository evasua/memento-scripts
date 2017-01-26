function createEvent(title, description, begin , end, location) 
{
  i = intent("android.intent.action.INSERT");       
  i.data("content://com.android.calendar/events");  
  i.extra("title", title);
  i.extra("description", description);                  
  i.extraLong("beginTime", begin.getTime());                                       
  i.extraLong("endTime", end.getTime());                      
  e.extra("eventLocation", location);
  i.send();                                       
}
