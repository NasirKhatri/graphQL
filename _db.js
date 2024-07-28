let games = [
    {id: '1', title: 'dfadslk dfasdf asdfadf adf', platform: ['Swith']},
    {id: '2', title: 'dfadslk eeee ffff gg gghfadf dfasdf', platform: ['Xbox']},
    {id: '3', title: 'qresdfasdfzxczx dfadsfef' , platform: ['Xbox', 'PC', 'PS5']},
    {id: '4', title: 'adfqer dfadfe fdafe fdfe eee cded ', platform: ['ABC']},
    {id: '5', title: 'dfedf gd shoaerioawe ccklxcxcn', platform: ['PS5', 'Xbox', 'PC']},
]

let authors = [
    { id: '1', name: 'Nasir', verified: true},
    { id: '2', name: 'Shadab', verified: false},
    { id: '3', name: 'Khatri', verified: true}
]

let reviews = [
    { id: '1', rating: 9, content: 'lorem  2345', author_id: '1', game_id: '1'},
    { id: '2', rating: 7, content: 'lorem ipsum', author_id: '2', game_id: '2'},
    { id: '3', rating: 6, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    { id: '4', rating: 2, content: 'lorem ipsum', author_id: '3', game_id: '4'},
    { id: '5', rating: 9, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    { id: '6', rating: 1, content: 'lorem ipsum', author_id: '1', game_id: '4'},
    { id: '7', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '3'},
    { id: '8', rating: 8, content: 'lorem ipsum', author_id: '3', game_id: '2'},
    { id: '9', rating: 7, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    { id: '10', rating: 2, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    { id: '11', rating: 9, content: 'lorem ipsum', author_id: '2', game_id: '3'},
    { id: '12', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '4'},
]

export default { games, authors, reviews }