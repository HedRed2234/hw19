function getCountry(){
  let capital=$("#capitalInput").val();
  $("#result").html("");
  if(capital===""){
    $("#result").html(
      "<p>Будь ласка, введіть столицю яку шукаєте</p>"
    );
    return;
  }

  $.ajax({
    url:`https://restcountries.com/v3.1/capital/${capital}`,
    method:"GET",
    success:function(data){
      let country=data[0];
      let flag=country.flags.png;
      let description=country.flags.alt;
      $("#result").html(`
        <img class="flag" src="${flag}" alt="flag">
        <p class="description">${description}</p>
      `);
    },

    error:function(){
      $("#result").html(
        "<p>Будь ласка, введіть столицю яку шукаєте</p>"
      );
    }
  });
}

$("#searchBtn").on("click", getCountry);

$("#capitalInput").on("keydown", function(event){
  if(event.key==="Enter"){
    getCountry();
  }
});