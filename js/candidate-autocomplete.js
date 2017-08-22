$(function(){
  var questions = [
    { value: 'Who is Jeff Peterson?', data: 'There is no objective answer to this question.  Although we pride ourselves with the wealth of information our site provides, we choose to refrain from speculation or subjective perspectives.  There is strong evidence to support the claim that Jeff is a nice guy.' },
    { value: 'Why do people gamble?', data: 'People might gamble to escape problems; some gamble for a high.' },
    { value: 'Will Trump resign before 2020?', data: 'Garantizado, amigos!' },
    { value: 'Why do gamblers fantasize about owning $250.00 shoes?', data: 'Research is ongoing.  Preliminary findings suggest that gamblers want reliable shoes for their frequent running away from collectors.' },
    { value: 'Is miming a good way to earn income to pay off a debt?', data: 'It can be. Some have been successful.  NYC is very competitive, while other places, like WI, not so much.'},
    { value: 'Can you bet on the results of another bet?', data: 'Yes.  This can create good leverage or increase your winnings.  *It can also increase your losses.' },
    { value: 'Why do people saw off shotgun barrels?', data: 'According to Jeff Peterson, Unofficial NRA Spokesman, this modification maximizes the spread.' },
    { value: 'What is the fastest way to becoming a millionaire?', data: 'Place bets with Jeff Peterson.' },
    { value: 'How do I give someone the illusion that they are funny when they are not?', data: 'Think of something really funny from your past when that person attempts to be funny.  This should help render a laugh.' },
    { value: 'What can I buy with $250.00?', data: 'Many things that are not paint.' },
    { value: 'Do I need to worry about collecting a debt after winning a bet?', data: 'Usually not.  However, if the debtor leaves the state or country within a day or two after realizing their foolish mistake, you might face challengs.' },
    { value: 'Does eating salmon impair jugement?', data: 'For most, consuming salmon does not impair cognition.  There are outliers whose lives have been destroyed by salmon.  NIH is currently working on a double blind study with a tasteless salmon.' },
    { value: 'Where will Scott Baio be when Trump resigns?', data: 'He will be at his weekly appointment with unemployment, as he has since the 80s.' },
    { value: 'How can I become wealthy as an actress if I only have high school drama training from a pedophile?', data: 'See the answer to the question "What is the fastest way to becoming a millionaire?"' },
    { value: 'Is Donald Trump really dumb enough to stare at the sun during an eclipse?', data: 'Yes.  He is.  He really really is that dumb.' },
    { value: 'What is up with the Trump hairstyle?  Is it real?', data: 'His hair was stolen from his exhumed grandfather for his own transplant.  It was experimental cosmetic surgery at the time.  The practice has since been abaondoned.' },
    { value: 'How do I break the news to a friend that he lost a bet?', data: 'Nobody likes to lose a bet.  Break the news with real or fake empathy.  Resist giggling.' },
    { value: 'Is it true that persons with the name Lisa have better luck than most?', data: 'This is a very popular myth.  See Snopes.com.' },
    { value: 'Trump seems to have a lot of secrets.  What is the worst of them all?', data: 'Donald Trump likes to watch porn featuring sad-faced clowns.' },

  ];
  
  // setup autocomplete function pulling from candidates[] array
  $('#autocomplete').autocomplete({
    lookup: questions,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Question:</strong> ' + suggestion.value + ' <br> <strong>Answer:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});