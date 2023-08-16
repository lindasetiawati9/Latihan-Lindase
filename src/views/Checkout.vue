<template>
    <div class="relative mx-auto w-full bg-white">
  <div class="grid min-h-screen grid-cols-10">
    <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
      <div class="mx-auto w-full max-w-lg">
        <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">Proses Pemesanan<span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
        <form action="" class="mt-10 flex flex-col space-y-4">
          <div><label for="email" class="text-xs font-semibold text-gray-500">Email</label><input type="email" id="email" name="email" placeholder="nama@gmail.com" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
          <div class="relative"><label for="card-number" class="text-xs font-semibold text-gray-500">Phone/WhatsApp</label><input type="text" id="card-number" name="card-number" placeholder="+62-XXXX-XXX" class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" class="absolute bottom-3 right-3 max-h-4" /></div>
          <div>
            <p class="mt-8 text-lg font-medium">Metode Pengiriman</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="https://yt3.googleusercontent.com/0a24H6sgeQwUFTrC7npBeyjQza_6VgdO90KQbQH4TbDxar4SG00i8vgLHsod-cbNBDiNFDBO=s900-c-k-c0x00ffffff-no-rj" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">JNE Express</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-3 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">J&T Express</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2 Days</p>
          </div>
        </label>
      </div>
    </form>
          </div>
          <p class="mt-8 text-lg font-medium">Metode Pembayaran</p>
          <div class="mb-4">
            <div class="block">
              <input class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow" type="checkbox" id="remember-me" style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)" checked />
              <label class="inline-block" for="remember-me"> COD  </label>
            </div>
            <div class="block">
              <input class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow" type="checkbox" id="remember-me" style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)" checked />
              <label class="inline-block" for="remember-me"> BRI  </label>
            </div>
          </div>  
          <p class="mt-8 text-lg font-medium">Kode ATM</p>
          <div><label for="card-name" class="sr-only">Card name</label><input type="text" id="card-name" name="card-name" placeholder="Isi bila metode pembayaran Transfer" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
        </form>
        <p class="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" class="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
        <button type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Order</button>
      </div>
    </div>
    <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 class="sr-only">Order summary</h2>
      <div>
        <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
      </div>
      <div class="relative">
        <ul class="space-y-5">
          <li class="flex justify-between">
            <div class="inline-flex">
              <img src="https://www.pedigree.id/sites/g/files/fnmzdf2951/files/migrate-product-files/images/nk0zwc4ubm518tbnqt9j.png" alt="" class="max-h-16" />
              <div class="ml-3">
                <p class="text-base font-semibold text-white">Pedigree</p>
                <p class="text-sm font-medium text-white text-opacity-80">Makanan Anjing</p>
              </div>
            </div>
            <p class="text-sm font-semibold text-white">Rp.70.000,-</p>
          </li>
          <li class="flex justify-between">
            <div class="inline-flex">
              <img src="https://s3.bukalapak.com/img/3666259742/large/Gigitan_Anjing___Mainan_Anjing_Tulang_Karet_Dog_Toys_Cat_Toy.jpg" alt="" class="max-h-16" />
              <div class="ml-3">
                <p class="text-base font-semibold text-white">Tulang Gigit</p>
                <p class="text-sm font-medium text-white text-opacity-80">Mainan Anjing</p>
              </div>
            </div>
            <p class="text-sm font-semibold text-white">Rp.13.500,-</p>
          </li>
        </ul>
        <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div class="space-y-2">
          <p class="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>Rp.83.500,-</span></p>
          <p class="flex justify-between text-sm font-medium text-white"><span>Ongkir</span><span>Rp.0,-</span></p>
        </div>
      </div>
      <div class="relative mt-10 text-white">
        <h3 class="mb-5 text-lg font-bold">Support</h3>
        <p class="text-sm font-semibold">+01 653 235 211 <span class="font-light">(International)</span></p>
        <p class="mt-1 text-sm font-semibold">support@nanohair.com <span class="font-light">(Email)</span></p>
        <p class="mt-2 text-xs font-medium">Call us now for payment related issues</p>
      </div>
      <div class="relative mt-10 flex">
        <p class="flex flex-col"><span class="text-sm font-bold text-white">Money Back Guarantee</span><span class="text-xs font-medium text-white">within 30 days of purchase</span></p>
      </div>
    </div>
  </div>
</div>

</template>