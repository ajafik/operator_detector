exports.getOperator =function getOperator(country_code, mssisdn)
{
    if (mssisdn != ""){

        if(country_code == "NG")
        {

        var operator_prefix = mssisdn.substring(0, 4);

        console.log(operator_prefix);
        var operator  ="";

        switch(operator_prefix){
            case "0701":
                operator  = "Airtel Nigeria";   
            break;
            case "0702":
                var two_prefix = mssisdn.substring(0, 5);
                switch(two_prefix)
                {
                    case "07025":
                    case "07026":
                    case "07027":
                    case "07028":
                    case "07029":
                         operator  = "Visafone"; 
                    break;

                    default:
                         operator  = "UnKnown";
                    break;
                }
            break;

            case "0703":
            case "0706":
            case "0803":
            case "0806":
            case "0810":
            case "0813":
            case "0814":
            case "0816":
            case "0903":
            case "0906":
                operator  = "MTN Nigeria";   
            break;

            case "0704":
                operator  = "Visafone";   
            break;

            case "0705":
            case "0805":
            case "0807":
            case "0811":
            case "0815":
            case "0905":
                operator  = "Globacom";   
            break;


            case "0707":
                operator  = "ZoomMobile";   
            break;

            case "0708":
            case "0802":
            case "0808":
            case "0812":
            case "0902":
            case "0907":
                operator  = "Airtel Nigeria";   
            break;

            case "0709":
                operator  = "Multi-Links";   
            break;

            case "0804":
                operator  = "Ntel";   
            break;

            case "0809":
            case "0817":
            case "0818":
            case "0909":
            case "0908":
                operator  = "Etisalat Nigeria";   
            break;

            case "0819":
                operator  = "Starcomms";   
            break;

            default:
                operator  = "UnKnown";
            break;


        }

        console.log(operator);
        
    }
}
}
