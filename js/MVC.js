class Model{
    constructor(){
        this.events=[
            {name:"Conference",description:"Blah Blah Blah!"},
            {name:"Meeting",description:"Blah Blah Blah!"},
            {name:"Talks",description:"Blah Blah Blah!"},
            {name:"Talks",description:"Blah Blah Blah!"},
            {name:"Talks",description:"Blah Blah Blah!"},
        ];
    }
     getEvents(id) {
         return this.events;
     }
}


class View{
    constructor(){}


    createEvents(name,description){
        
        let eventName = document.createElement("div")
        eventName.classList.add("EventHeading")
        eventName.innerText = name;

        let eventDescription = document.createElement("div")
        eventDescription.classList.add("Description")
        eventDescription.innerText = description;
        
        let avatar = document.createElement("div")
        avatar.classList.add("avatar")
       
        
        let eventInfo = document.createElement("div")
        eventInfo.classList.add("aboutEvent")    
        eventInfo.appendChild(eventName)
        eventInfo.appendChild(eventDescription)
          
        let event = document.createElement("div")
        event.classList.add("Event")

        event.appendChild(avatar)
        event.appendChild(eventInfo)
        
        return event;

}


findId(id){
    return document.getElementById(id);
}


}


class Controller{
    constructor( model, view){
        this.model = model;
        this.view = view;        
    }
}



const app = new Controller(new Model(),new View());
app.model.events.map((event)=>{
    var view = app.view;
    var model = app.model;
    var Events = view.findId("Events");
    var newEvent = view.createEvents(event.name,event.description);
    Events.appendChild(newEvent);
});
