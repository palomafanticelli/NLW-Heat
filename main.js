const SocialMedia = {
  github: 'palomafanticelli',
  instagram: 'tidasplantas',
  facebook: 'tidasplantas',
  linkedin: 'in/paloma-fanticelli'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${SocialMedia[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${SocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
  })
}