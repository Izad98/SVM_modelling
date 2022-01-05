$(document).ready(function() {
    // alert('jquery loaded');

    const names = {
        'city': "City",
        'development': "City development Index",
        'gender': "Gender",
        'experience': "Relevant Experience",
        'university': "University Enrollment",
        'education': "Education Level",
        'major': "Major Descipline",
        'experience_year': "Relevant Experience",
        'company_size': "Company Size",
        'company_type': "Company Type",
        'job': "Last New Job",
        'training': "Trainig Hours",
    };

    $('#predict').click(function(e) {
        e.preventDefault();
        $("#dimmer").removeClass('hide');
        // alert('clicked');
        const city = $("#cities").val();
        const development = $("#cdi").val();
        const gender = $("input[name='gender']:checked").val();
        const experience = $("input[name='experience']:checked").val();
        const university = $("#uni").val();
        const education = $("#education").val();
        const descipline = $("#descipline").val();
        const experience_year = $("#experience_year").val();
        const size = $("#size").val();
        const type = $("#type").val();
        const new_job = $("#new_job").val();
        const training = $("#training_hrs").val();

        var d = {
            'city': city,
            'development': development,
            'gender': gender,
            'experience': experience,
            'university': university,
            'education': education,
            'major': descipline,
            'experience_year': experience_year,
            'company_size': size,
            'company_type': type,
            'job': new_job,
            'training': training,
        };

        let ok = true;
        let incomp = "";
        for(const key in d){
            if(d[key] ===null){
                ok = false;
                incomp = key;
                break;
            }
        }

        if (ok){
            $.ajax({
                type: "POST",
                url: "./app.py",
                data: d,
                success: function(res) {
                    console.log(d);
                    console.log(res);
                    window.location.href = "./results.html?res=" + res;
                },
                error: function(err) {
                    console.log(err);
                    alert("Error occurred try again later")
                    $("#dimmer").addClass('hide');
                }
            })
        }
        else{
            alert(names[incomp] + ": not filled");
            $("#dimmer").addClass('hide');
        }
        


    })

})