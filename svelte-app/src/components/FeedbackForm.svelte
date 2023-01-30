<script lang="ts">
    import { FeedbackStore } from '../stores';
    import RatingSelect from './RatingSelect.svelte';
    import { MIN_LENGTH, MIN_LENGTH_CHARACTER_MESSAGE} from "../constant"
    import Card from './Card.svelte'
    import Button from './Button.svelte'
  
    let text: string = ''
    let btnDisabled: boolean = true
    let message: string = '';
    let rating: number;

    const handleInput = () => {
      message = null;
      btnDisabled = false;
    }

    const handleSubmit = (e: SubmitEvent) => {
      const isValid = formValidation();
      if (isValid) {
        const newFeedback = {
          id: Math.floor(Math.random()*100),
          text,
          rating
        }
        FeedbackStore.update((currentFeedback) => {
          return [newFeedback, ...currentFeedback]
        })
        text = '';
        btnDisabled = true;
      }
    }

    const formValidation = () => {
      let isValid = true;
      if (text.trim().length <= MIN_LENGTH) {
        message = MIN_LENGTH_CHARACTER_MESSAGE;
        isValid = false;
        btnDisabled = true;
      }
      return isValid;
    };
</script>
  
  
<Card>
    <header>
      <h2>How would you rate our 5G Plans?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect bind:selected={rating}/>
        <div class="input-group">
          <input type="text" 
              bind:value={text}
              on:input={handleInput}  
              placeholder="Tell us something about our service">
          <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        {#if message}
        <div class="message">
            {message}
        </div>
        {/if}
    </form>
</Card>
  
<style>
    header {
      max-width: 400px;
      margin: auto;
    }
  
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
  
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
  
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
  
    input:focus {
      outline: none;
    }
  
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
</style>
  