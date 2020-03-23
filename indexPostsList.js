fetch('http://localhost:3000/post').then(function (response) {
    return response.json();
}).then (function(posts){ 
    text = "";
    for (i = 0; i < posts.length; i++) {
        text += '<div class="indexPost ' + checkI(i) + '">' +
              '<a class="indexPostTitleLink" href=""><h3 class="indexPostTitle">' + posts[i].title + '</h3></a>' +
              '<div class="indexPostDetails">' + 
                '<div class="row">'+
                  '<div class="col">'+
                    'Author: <a href="">' + posts[i].author + '</a>'+
                  '</div>'+
                  '<div class="col">'+
                    'Publication Date:' + posts[i].creationDate +
                  '</div>'+
                '</div>' +
              '</div>' + 
              '<div class="indexPostText">' +
                  '<a href=""><h5>' + posts[i].text + '</h5></a>' +
              '</div>' +
              '<div class="indexPostMedia">' +
                '<div class="indexPostMediaContent">' +
                    posts[i].media +
                '</div>' +
              '</div>' +
              '<div class="indexPostRating">' +
                '<div class="row">' +
                  '<div class="col-md-3">' +
                    '<a href="">Like</a>: ' + posts[i].likes +
                  '</div>' +
                  '<div class="col-md-3">' +
                    '<a href="">Dislike</a>: ' + posts[i].dislikes +
                  '</div>' +
                '</div>' +
              '</div>' +
          '</div>'
        ;
    }
    document.getElementById("posts").innerHTML = text;
});

function checkI (i){
    if (i % 2 == 0) {
        return "lightGray";
    } else {
        return "gray";
    }        
}