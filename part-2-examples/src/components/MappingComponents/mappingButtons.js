import './../styles.css'

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function EmojiGreeting() {
   // const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      {/* <h1 id={greeting}>Hello, World</h1> */}
      <h1>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
               <span id={emoji.name}>{emoji.emoji}</span>
               {/* <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span> */}
               
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EmojiGreeting;

// source: https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react
// Event: target property --> https://developer.mozilla.org/en-US/docs/Web/API/Event/target
