// pages/privacy.js
// À CONFIRMER : relisez ce texte et adaptez-le si vous ajoutez un outil d'analyse, un formulaire ou des cookies.
import PageShell from '../components/PageShell';
import { EMAIL, ADDRESS } from '../lib/site';

const sections = [
  ['Qui est responsable de vos données', `Le site searchsnippets.com est édité par BlueCode Agency (SearchSnippets.com), ${ADDRESS}. Pour toute question sur vos données, écrivez-nous à ${EMAIL}.`],
  ['Les données que nous recevons', "Ce site ne contient pas de formulaire. Nous ne recevons des données que si vous nous écrivez par e-mail ou sur WhatsApp : votre nom, vos coordonnées et les informations sur votre projet que vous choisissez de nous transmettre."],
  ['Pourquoi nous les utilisons', "Uniquement pour répondre à votre message, préparer un devis et assurer le suivi de votre projet si nous travaillons ensemble. Nous ne vendons pas vos données et ne les utilisons pas pour de la publicité."],
  ['Combien de temps nous les gardons', "Le temps nécessaire au traitement de votre demande, puis pendant la durée de la relation commerciale et les obligations légales qui s'y rattachent. Vous pouvez demander leur suppression à tout moment."],
  ['Cookies et mesure d\'audience', "Le site n'utilise ni cookies publicitaires ni outil de suivi. Si nous en ajoutons un, cette page sera mise à jour et, si la loi l'exige, votre accord sera demandé."],
  ['Services tiers', "Le site est hébergé sur Vercel. Les polices de caractères sont chargées depuis Google Fonts : votre adresse IP est alors transmise à Google, comme pour tout site qui utilise ce service. Les liens vers des sites externes (par exemple nos réalisations) relèvent de la politique de confidentialité de ces sites."],
  ['Vos droits', `Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et d'opposition. Pour l'exercer, écrivez à ${EMAIL}. Vous pouvez aussi vous adresser à la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).`],
  ['Mises à jour', "Cette page peut évoluer. La date de dernière mise à jour figure en haut de la page."],
];

export default function Privacy() {
  return (
    <PageShell
      title="Politique de confidentialité | SearchSnippets.com"
      description="Quelles données BlueCode Agency reçoit, pourquoi, combien de temps, et comment exercer vos droits selon la loi marocaine 09-08."
    >
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 lg:pt-28">
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-mute">Dernière mise à jour : octobre 2026</p>
        <p className="mt-8 text-lg text-mute leading-relaxed">En résumé : nous ne recevons que les informations que vous nous envoyez vous-même, nous les utilisons pour répondre à votre projet, et vous pouvez en demander la suppression quand vous voulez.</p>

        <div className="mt-12 space-y-10">
          {sections.map(([t, d]) => (
            <div key={t}>
              <h2 className="font-display font-bold text-xl sm:text-2xl">{t}</h2>
              <p className="mt-3 text-mute leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}