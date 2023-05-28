import React from "react"

const styles = {
  color: 'white',
};

const About = () => {
  return (
    <>
      <section className='hero' >
        <h1 style={styles}>Jigokuraku</h1>
        <br />
        <br />
        <h2 style={styles}>Gabimaru the Hollow, seorang ninja dari Desa Iwagakure yang dikenal dingin dan tanpa emosi,
          dijebak oleh sesama ninja dan sekarang berada di hukuman mati. Bosan membunuh dan berkhianat, dia ingin mati.
          Namun, tidak ada metode eksekusi yang berhasil padanya karena meskipun Gabimaru yang tampaknya apatis menolak
          untuk mengakuinya, dia memiliki alasan untuk hidup. Dia ingin kembali ke istrinya, yang menjadi alasan mengapa
          dia melunak dan gagal menjadi pembunuh yang efektif. Karena itu, dia menolak untuk mati.</h2>
        <br />
        <h2 style={styles}>Asaemon the Decapitator, seorang algojo terkenal, melihat ini dan memiliki proposal untuk ninja.
          Dia ingin Gabimaru bergabung dalam ekspedisi ke sebuah pulau di selatan Jepang untuk mencari ramuan kehidupan
          dengan imbalan pengampunan penuh dari Keshogunan.</h2>
        <br />
        <h2 style={styles}>Namun, pulau ini bukanlah pulau biasa: diyakini sebagai Surga. Namun pulau itu penuh dengan misteri,
          dan tim penjelajah — terdiri dari mereka yang ditandai mati — mungkin tidak sepenuhnya siap untuk menanganinya.</h2>
      </section>
    </>
  )
}
export default About
