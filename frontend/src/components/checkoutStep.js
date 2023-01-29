const chekoutStep = {
    render: (props) => {
        return `
     
        <div class="chekout-step">
          <div class="${props.step1 ? 'active' : ''}">ورود</div> 
          <div class="${props.step2 ? 'active' : ''}">اطلاعات بیشتر</div>
          <div class="${props.step3 ? 'active' : ''}">نحوه پرداخت</div>
          <div class="${props.step4 ? 'active' : ''}">پرداخت</div>
       </div> 
        `
    }
}

export default chekoutStep;