# BGreen-Project Document

In this text I'll explain the analisys, desing, implentation and test of BGreenSite.


# UX Desing

```
1. Strategy
  1. Business Goals:
     . Inform about nocive products on the market which are not healthy and produce
     . Cancer or other diseases.
     . Motivate people to be healthy and to change their habits.
     . Help green and eco business to raise over other business.
     . Be funny. People needs feeling happy and useful about a change.
     . Inform about the Earh resources and the use we do of them.
     . Give trusted and verified information.
  2. User Constituencies:
     . Age 16 to death.
     . Future (sell to schools too.)
  3. Usage Context:
     . Everywhere during free time (desktop, laptop, tablet, mobile)
     . People's conversations.
     . rss feeds from twitter API(consuming twitter API, filter comments with keywords from lobbies and display them)
  4. Promotion
     . Signficative payment to register and announce a new business
     . Facebook enterprise page: pay for advertisements
     . Google Adworks
     . Sustainable events
     . Through cbankpayments registered user can get discounts when buying in organic "eco" business
```

# Project Folder Estructure
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


# Balsamiq Mockups

[Download balsamiq project here](balsamiq/)

# Use Case Diagrams

*BGreen packages diagram*
![System packages](img/BGreenPackagesDiagram1.png "Logo Title Text 1")

*BGreen use case diagram*
![BGreen use case diagram](img/ManageEcoBusines.png "Logo Title Text 2")

*Register new business sequence diagram*
![Register new business](img/RegisterBusinesSequenceDiagram.png "Logo Title Text 3")

*Register new user sequence diagram*
![Register new user](img/RegisterUserSequenceDiagram.png "Logo Title Text 4")

*Edit projects list sequence diagram*
![Edit projects list](img/EditProjectsListSequenceDiagram.png "Logo Title Text 5")

*Select businesses with close locations*
![Search business by location](img/ShowCloseLocationsProjectsList.png "Logo Title Text 6")

# Forms Verification

Html validation :(https://validator.w3.org)

# Jazmine Unit Test






