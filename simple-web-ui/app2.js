$("#showBtn").click(() => $(".alert").show());
$(".btn-danger").click(() => $(".alert").hide());
$('.btn-success').click(()=> $('.alert').html("Ola User!"));


$('#todo-button').click(()=>{
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    $.getJSON(url, (response)=>{
        $('.jumbotron').html(JSON.stringify(response));
    })
});

// $('stop').