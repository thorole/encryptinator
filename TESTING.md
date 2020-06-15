# Manual testing

## Navigation
| Item       | Event | Expected result            | Fail | Pass |
|------------|-------|----------------------------|------|------|
| Home link  | Click | Reload page                |      | X    |
| Learn link | Click | Go to top of learn section |      | X    |
| Forms link | Click | Go to top of forms section |      | X    |
| Play link  | Click | Go to top of game section  |      | X    |

## Learn section
 | Item                        | Event          | Expected result                 | Fail | Pass |
|-----------------------------|----------------|---------------------------------|------|------|
| Read more button (cesar)    | Click          | Reaveals hidden part of section |      | X    |
| Read more button (vigenere) | Click          | Reveals hidden part of section  |      | X    |
| Modal (cesar)               | Click          | Opens modal                     |      | X    |
| Modal (vigenere)            | Click          | Opens modal                     |      | X    |
| Modal (cesar) visible       | Click anywhere | Closes modal                    |      | X    |
| Modal (vigenere) visible    | Click anywhere | Closes modal                    |      | X    |
| Read less button (cesar)    | Click          | Hides part of section           |      | X    |
| Read less button (vigenere) | Click          | Hides part of section           |      | X    |
## Encryption/decryption forms
Also see automated testing.

| Item                                          | Event | Expected result                         | Fail | Pass |
|-----------------------------------------------|-------|-----------------------------------------|------|------|
| Encrypt (cesar) button (empty input field)    | Click | Display "Please insert text"            |      |X     |
| Encrypt (vigenere) button (empty input field) | Click | Display "Please insert text"            |      |X     |
| Decrypt (vigenere) button (empty input field) | Click | Display "Please insert text"            |      |X     |
| Decrypt (cesar) button (empty input field)    | Click | Display "Please insert text"            |      |X     |
| Encrypt (vigenere) button (empty key field)   | Click | Display "Letters only, no spaces"       |      |X     |
| Encrypt (cesar) button (empty shift field)    | Click | Display "Number must be integer, 1-25." |      |X     |
| Decrypt (vigenere) button (empty key field)   | Click | Display "Letters only, no spaces"       |      |X     |
| Decrypt (cesar) button (empty input field)    | Click | Display "Number must be integer, 1-25." |      |X     |
| Clear (cesar encrypt) button                  | Click | Clears this section of the form.        |      |X     |
| Clear (vigenere encrypt) button               | Click | Clears this section of the form.        |      |X     |
| Clear (cesar decrypt) button                  | Click | Clears this section of the form.        |      |X     |
| Clear (vigenere decrypt) button               | Click | Clears this section of the form.        |      |X     |	

## Game
| Item                                         | Event                      | Expected result                             | Fail | Pass |
|----------------------------------------------|----------------------------|---------------------------------------------|------|------|
| Check button (empty input field)             | Click                      | Display "Please insert a word"              |      |      |
| Check button (wrong word)                    | Click                      | Display "Incorrect"                         |      |      |
| Check button (correct word)                  | Click                      | Display next level box and button.          |      |      |
| Check button (correct word, next last level) | Click                      | Display error message and next level button |      |      |
| Any level                                    | Time runs out.             | Display game over box and button.           |      |      |
| Game (last stage)                            | Time runs out (last level) | All buttons disabled                        |      |      |
| Game (last stage)                            | Time runs out (last level) | Nav links are 404                           |      |      |
| Game (last stage)                            | Time runs out (last level) | All input fields are disabled               |      |      |
| Restore website button                       | Restore website button     | Refreshes website                           |      |      |

