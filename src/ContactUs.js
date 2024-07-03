import  './ContactCss.css'

function ContactUs(){
    return <div class="container">  
    <form action="https://formspree.io/f/mpzbnday" id="contact"  method="POST">
      <h3>Liên hệ với chúng tôi</h3>
      <h4>Chúng tôi sẽ trả lời bạn trong vòng 24 giờ.</h4>
      <fieldset>
        <input placeholder="Họ và tên" type="text" tabindex="1" required />
      </fieldset>
      <fieldset>
        <input placeholder="Email" type="email" tabindex="2"  name="email" required/>
      </fieldset>
      <fieldset>
        <input placeholder="Số điện thoại (tùy ý)" type="tel" tabindex="3" />
      </fieldset>
      <fieldset>
        <textarea placeholder="Mô tả chi tiết" tabindex="5"  name="message"required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Enviando"> Đăng kí</button>
      </fieldset>
     
    </form>
  </div>


}
export default ContactUs;