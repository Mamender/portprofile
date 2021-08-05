const Experience =  () =>{

   const CompanyDeatils = [
        {
            Company : 'Icognix Infomedia',
            Desgination: 'Web Developer',
            StartDate : '15/05/2014',
            EndDate : '05/09/2015'
        },
        {
            Company : 'Dgflick Software Service Pvt Ltd',
            Desgination: 'Web Developer',
            StartDate : '05/05/2016',
            EndDate : '08/02/2018'
        },
        {
            Company : 'Powerweave Software Service Pvt Ltd',
            Desgination: 'Web Developer',
            StartDate : '12/02/2018',
            EndDate : 'Till Date'
        }
    ]

    return(
        <div className="Exp-wraper">
            {
                CompanyDeatils.map((e, i) =>{
                    console.log(e);
                     return(
                        <div className="exp-wraper-inner" key={i}>
                            <h5>{e.Company}</h5>
                        </div>
                     )
                    
                })
            }
        </div>
        
    )
}
    

    export default Experience;
