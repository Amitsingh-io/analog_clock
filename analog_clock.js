function setDate()
        {const secondHand=document.querySelector('.sec_hand');
        const minHand=document.querySelector('.min_hand');
        const hrHand=document.querySelector('.hr_hand');
            const cur= new Date();
            const sec=cur.getSeconds();
            const secDeg=((sec/60)*360)+90;
            secondHand.style.transform=`rotate(${secDeg}deg)`;

            const min=cur.getMinutes();
            const minDeg=((min/60)*360)+90;
            minHand.style.transform=`rotate(${minDeg}deg)`;

            const hr=cur.getHours();
            const hrDeg=((hr/60)*360)+90;
            hrHand.style.transform=`rotate(${hrDeg}deg)`;
        

            }setInterval(setDate,1000);