$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        function addList() {
            var inputText = $(".input-text").val();
            $("ol").append('<li id='+ generateUUID() + ' class="itemList">' + '<input name="done-todo" type="checkbox" class="done-todo">' + inputText+ '</li>');
            $(".input-text").val('');
        }
       $('#button').click(addList);

       $("ol").on("click", ".done-todo", function() {
           if (this.unchecked){
               $(this).parent().removeClass("checked");
           } else{
               $(this).parent().addClass("checked");
            }
           });
       $("ol").on("click", ".done-todo", function() {
           if (this.checked){
               $(this).parent().addClass("checked");
           } else{
               $(this).parent().removeClass("checked");
           }
           });

       $("[href='#']").click(function() {
       if ($(this).attr("data-filter") == "all"){
         $(".done-todo").each(function(){
               $(this).parent().show();
            })
        };

       if ($(this).attr("data-filter") == "active"){
            $(".done-todo").each(function(){
               if(this.checked){
                  $(this).parent().hide();
               } else{
                  $(this).parent().show();
               }
            });
           }

       if ($(this).attr("data-filter") == "complete") {
            $(".done-todo").each(function(){
               if(this.checked){
                  $(this).parent().show();
               } else{
                  $(this).parent().hide();
               }
             });
           }
          });
        $(document).on("dblclick", "li", function() {
            $(this).attr("contenteditable", "true");
        });
        $(document).on("focusout", "li", function() {
            $(this).attr("contenteditable", "false");
        });
        });



