#BGreen-Project Document

In this text I'll explain the analisys, desing, implentation and test of BGreenSite.


#UX Desing

```
1. Strategy:
  1 Business Goals:
    . inform about nocive products on the market which are not healthy and produce
      cancer or other diseases.
    . motivate people to be healthy and to change their habits.
    . help green and eco business to raise over other business.
    . be funny. People needs feeling happy and useful about a change.
    . inform about the Earh resources and the use we do of them.
    . Give trusted and verified information.
  ### User Constituencies:
    . age 16 to death.
    . future (sell to schools too.)
  ### Usage Context:
    . Everywhere during free time (desktop, laptop, tablet, mobile)
    . People's conversations.
    . rss feeds from twitter API(consuming twitter API, filter comments with keywords from lobbies and display them)
```

#Project Folder Estructure
```
.bGreen
   |-EcoBusinessSubsystem
       |-modules
           |-registerBusinessModule.module.js
       |-controllers
       |-filters
       |-directives
       |-services
       |-partials
   |-GetMissionSubsystem
       |-modules
       |-controllers
       |-filters
       |-directives
       |-services
       |-partials
   |-ExternalServicesSubsystem
       |-TwitterRssFeeds
       |-GoogleMaps
```

#Use Case Diagrams

*Manage eco business use case diagram*

![alt text](img/BGreenPackagesDiagram1.png "Logo Title Text 1")

*ManageEcoBusiness*

![alt text](img/ManageEcoBusines.png "Logo Title Text 1")


*Register Business Sequence Diagram*
![alt text](img/registerBusinessSequenceDiagram.png "Logo Title Text 1")

*New Register User*
![alt text](img/registerUserSequenceDiagram.png "Logo Title Text 1")

*Edit My Projects List*
![alt text](img/editProjectsListSequenceDiagram.png "Logo Title Text 1")

#Forms Verification

#Jazmine Unit Test




