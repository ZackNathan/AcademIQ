## Inspiration
As college students involved in theses, undergraduate research, and school projects, we know about the struggle of finding quality, scholarly resources. From this stress though, comes our idea of making finding sources easier and encouraging students to engage with research about topics they are already reading about.

## What it does
Our project is a Chrome extension that provides a few scholarly articles found in arXiv that directly relate to the user's current webpage.

## How we built it
- Used the manifest v3 framework to create Chrome extension.
- The extension communicates with a Flask backend using to request analysis of the current webpage's text.
- We used a Transformer-based NLP model in Python to extract keywords from the article and then search arXiv for articles that contain those keywords.

## Challenges we ran into
- Seting up the Chrome extension was difficult. We couldn't get hot reloading, which was frustrating.
- We searched for a while for a way to deploy our backend. We ended up using PythonAnywhere, which was a good (and free!) solution.
- Passing messages between the backend and the frontend was difficult. This was exacerbated by issues with quotation mark characters not being properly escaped, etc.

## Accomplishments that we're proud of
- We're proud of the fact that we have a working Chrome extension, Flask backend, and NLP model all up in fewer than 24 hours and they all communicate and play nicely together! The process brought us a lot closer together as friends and as a team.
- We also like that our project aims to help students like us and encourage them to engage with current research about topics they are interested in.


## What we learned
- Charlie: First hackathon! Learned how to properly work in a team in GitHub, use merging, PythonAnywhere...
- Zack N.: Learned lot about JavaScript, Chrome Extensions, and APIs. How easy it can be to get a backend up and running with Python Anywhere.
- Zack G.: Learned about how Chrome Extensions work (that they are just HTML/CSS/JS) and how easy it is to find APIs to access research papers.
- Dan: First hackathon! Learned how much you can learn in 24 hours if you really dive in.

## What's next for AcademIQ
We can extend AcademIQ to provide further resources to the user. For example, if we had more time, we'd love to provide the user with related charts and/or videos as well, that way the user can learn more from visual resources as well. This is important because people have a variety of learning styles.