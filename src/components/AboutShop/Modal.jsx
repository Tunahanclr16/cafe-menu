import React from 'react';

export default function Modal() {
  return (
    <div className="fixed inset-0 z-50  bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white  overflow-auto sm:w-[30%] h-[400px] sm:h-[800px] p-6 rounded-lg shadow-lg">
        <div className="cafe-info">
          <h2 className="text-2xl font-bold mb-4">Kafe özellikleri</h2>
          <ul className="list-disc pl-6">
            <li>Wifi</li>
            <li>Hijyen</li>
            <li>Memnuniyet</li>
            {/* Diğer özellikler */}
          </ul>  <div className='border border-b  w-full border-gray-300 mt-4'>
</div>
        </div>
      
        <header className="bg-gray-100 p-2 border h-12 flex items-center">Working Hours</header>
                <div className="flex flex-col gap-2 mt-2">
                    <p className='bg-gray-100 '>Monday  10:00 - 23:59</p>
                    <p className='bg-gray-100 '>Tuesday  10:00 - 23:59</p>
                    <p className='bg-gray-100 '>Wednesday  10:00 - 23:59</p>
                    <p className='bg-gray-100 '>Thursday 10:00 - 23:59</p>
                    <p className='bg-gray-100 '>Friday ; 10:00 - 23:59</p>
                    <p className='bg-gray-100 ' >Saturday  10:00 - 23:59</p>
                    <p>Sunday 10:00 - 23:59</p>
                </div>
                <div className="map-info mt-6">
          <h2 className="text-2xl font-bold mb-2">Konum</h2>
          <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626110943!2d2.291906376988997!3d48.85837007133224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEyfel%20Kulesi!5e0!3m2!1str!2str!4v1691076238685!5m2!1str!2str" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className=" mt-6">
          <h2 className="text-2xl font-bold mb-2">Rezervasyon İçin</h2>
          <p>Telefon: 123-456-7890</p>
        </div>
    
      </div>
    </div>
  );
}
