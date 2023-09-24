<template>
  <div class="flex flex-col sm:flex-row justify-evenly">
    <div class="pe-0 sm:pe-5">
      <header class="footer-title">Contact us</header>
      <p class="hidden sm:block pb-2">
        If you would like to contact us, you can use the contact form or send an
        email to the address below.
      </p>

      <p><b>E-Mail:</b> app(a)tum.de</p>
      <p>
        <b>Adresse:</b>
        <code>ITSZ - OpenSource@TUM, Arcisstraße 21, 80333 München</code>
      </p>
      <div class="sm:hidden px-3 divider">OR</div>
    </div>
    <form>
      <div class="form-control">
        <label class="label">
          <span class="label-text">What should we call you?</span>
        </label>
        <input
          type="text"
          placeholder="Your name"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">
            If we have further questions, how can we get in touch?
          </span>
        </label>
        <input
          type="text"
          placeholder="firstname.secondname@tum.de"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your message</span>
        </label>
        <textarea class="textarea textarea-bordered h-24"></textarea>
      </div>
      <div class="form-control py-3">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
