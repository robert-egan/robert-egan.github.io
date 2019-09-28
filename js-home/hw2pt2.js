 $(document).ready(function(){
                
                
                $(function() {
                    $("name").tooltip();
                } );
                
                $("#submit").click(function(){
                    var total1, total2, total3, total4, sum, comm;
                    var items = [$("#item1").val(),$("#item2").val(),$("#item3").val(),$("#item4").val()]
                    //If given a NaN value or a negative number, 0 will be assigned
                    var value;
                    for(value in items){
                        if(isNaN(items[value])){
                            items[value] = 0;
                        }
                        else{
                            items[value] = parseInt(items[value]);
                            if(items[value]<0){
                                items[value] = 0;
                            }
                        }
                    }
                    total1 = items[0] * 239.99;
                    total2 = items[1] * 129.75;
                    total3 = items[2] * 99.95;
                    total4 = items[3] * 350.89;
                    sum = total1 + total2 + total3 + total4;
                    comm = 200 + (sum *.09);
                    total1 = total1.toFixed(2);
                    total2 = total2.toFixed(2);
                    total3 = total3.toFixed(2);
                    total4 = total4.toFixed(2);
                    sum = sum.toFixed(2);
                    comm = comm.toFixed(2);
                    $("#item1_val").val(items[0]);
                    $("#item2_val").val(items[1]);
                    $("#item3_val").val(items[2]);
                    $("#item4_val").val(items[3]);
                    $("#item1_total").val("$"+total1);
                    $("#item2_total").val("$"+total2);
                    $("#item3_total").val("$"+total3);
                    $("#item4_total").val("$"+total4);
                    $("#weekTotal").val("$"+sum);
                    $("#commTotal").val("$"+comm);
                })
                
            })