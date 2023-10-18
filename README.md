# Rafael React Challenge
## How to run
This is a dockerized app, all you need is run the compose

```sh
docker compose up
```
## Project Structure
 click on the link bellow to see the image
[![project structure image](https://drive.google.com/file/d/1EU_oL5ioOIFCXlq63pI4GOz6Xlqy47K0/view?usp=sharing)](https://drive.google.com/file/d/1EU_oL5ioOIFCXlq63pI4GOz6Xlqy47K0/view?usp=sharing)
### store
I created a store folder to handle the redux config and expose some hooks. For every domain I would create a new slice. Here I hold the underlining logic and data about wich letters should be underlinde
### components
Here there is the core folder. This should hold abstract components shared among the app like buttons, inputs etc.. If I had a bigger app I would create more folders, like ui and layout, to hold ui and layouts components.
### screens
Here sits all screens of the app
### constansts
Holds all constants of the app, the element's acronyms, colors etc ..

## Dependencies
### Styled Components
I chose to use it, to show I know how to use it and I belive that having smaller styled components which you can combine works very good on code reuse and specially with clever naming increases readability, since you do not need to read a big chunk of scss to understand what that component does.

### Redux
Since the challenge asks to use redux, I decided to hold the logic of finding the elements there and the data about which one we should make green.

## Contact
If you have any question about the solution, please get in touch rafaelgmagalhaes@proton.me