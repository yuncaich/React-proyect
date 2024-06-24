import React from 'react';
import HeroBackground from '../components/HeroBackground';

const TermsPage = () => {
    return (
        <>
            <HeroBackground /> 
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-8"> {/* Añadir margen superior para separar el contenido */}
                <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
                <p className="mb-4">
                    El acceso a las instalaciones, servicios y actividades de MUNDOLANDIA PARK supone la aceptación de las siguientes CONDICIONES BÁSICAS DE USO:
                </p>
                <h2 className="text-2xl font-semibold mb-4">Primero.- MENORES DE EDAD</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>El registro de los niños que accedan a MUNDOLANDIA PARK se realizará siempre bajo la tutela de una persona mayor de edad, que será la responsable y la persona de contacto durante la permanencia del menor en el parque.</li>
                    <li>Los menores deberán salir del parque con el mismo responsable con el que accedieron al mismo, salvo aviso justificado por escrito en recepción. En ese caso se deberá facilitar el DNI del adulto que recogerá al menor, y se indicará la relación con el mismo.</li>
                    <li>MUNDOLANDIA PARK no tiene servicio de cuidado infantil por lo que no se responsabiliza de los menores dejados en nuestras instalaciones sin la supervisión de un adulto.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Segundo.- MONITORES</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Los monitores de MUNDOLANDIA PARK tienen como función controlar y vigilar por la seguridad de los usuarios a nivel general, nunca individual.</li>
                    <li>En el caso de menores, el tutor o responsable del niño que acceda a MUNDOLANDIA PARK es el responsable de su perfecto estado de salud.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Tercero.- RIESGOS Y RESPONSABILIDADES</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>MUNDOLANDIA PARK dispone de instalaciones homologadas legalmente y en perfecto estado para garantizar la seguridad de todos sus usuarios. Por ello, si se cumplen las normas de funcionamiento y las indicaciones de los monitores, el riesgo de accidente es mínimo.</li>
                    <li>Con todo, el usuario conoce y acepta que los riesgos no pueden ser totalmente controlados, ni por él ni por la empresa. En particular, existe riesgo de lesiones por golpes, esguinces o fracturas. El usuario asume las consecuencias negativas que para sí mismo o para otros puedan derivar del uso de las instalaciones, siempre que MUNDOLANDIA PARK no haya actuado con mala fe, negligencia o descuido inaceptable, atendidas las circunstancias.</li>
                    <li>El usuario declara encontrarse en las condiciones físicas y mentales adecuadas para el uso de instalaciones, y que no sufre enfermedad o limitación física que lo impida. En particular, el usuario declara que no padece enfermedad de tipo coronaria, cardiovascular, respiratoria o lesiones traumatológicas.</li>
                    <li>MUNDOLANDIA PARK no se hace responsable de los daños o quebrantos que pueda sufrir el usuario como consecuencia de no seguir las instrucciones que se le impartan, no atender los requerimientos que se le formulen, utilizar los elementos del parque para fines distintos de aquellos para los que están diseñados, o no facilitar información relevante sobre falta de condiciones para hacer uso de las instalaciones.</li>
                    <li>El cliente responderá por la totalidad de daños y deterioros que puedan experimentar el material, las instalaciones, el personal, u otros clientes de MUNDOLANDIA PARK, como consecuencia del uso inadecuado, irresponsable o contraviniendo instrucciones impartidas, del material e instalaciones del parque, tanto si deriva de comportamientos propios como de las personas por las que debe responder.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Cuarto.- ADVERTENCIAS GENERALES, PROHIBICIONES y DERECHO DE ADMISIÓN</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>En la zona de juegos es obligatorio el uso de calcetín antideslizante MUNDOLANDIA PARK [se debe adquirir en la recepción de nuestras instalaciones]. Siempre se llevará la pulsera que se entrega en recepción.</li>
                    <li>Está terminantemente prohibido mantener conductas impropias que puedan incomodar al resto de visitantes, y/o alterar el orden. En particular, queda prohibida la entrada a personas bajo efecto de alcohol, drogas u otras sustancias ilegales.</li>
                    <li>Queda terminantemente prohibido: saltar con joyería, carteras u otros objetos; usar calzado; tirarse de cabeza; acceder a los juegos con alimento o bebida, y comer o beber en las instalaciones, incluidos chicles o caramelos, por peligro de atragantamiento; correr o saltar con un solo pie; saltar dos o más personas en una misma cama elástica.</li>
                    <li>Cualquier zona de juegos podrá cerrar su actividad sin previo aviso por motivos de seguridad, mantenimiento, avería, o cualquier otra causa de similar entidad que justifique la decisión.</li>
                    <li>MUNDOLANDIA PARK no se responsabiliza de los objetos olvidados o perdidos en sus instalaciones.</li>
                    <li>MUNDOLANDIA PARK se reserva el derecho de admisión y de expulsar de sus instalaciones a todo aquel visitante que incumpla las normas. El uso de nuestras instalaciones es incompatible con comportamientos agresivos, incumplimiento de normas de seguridad, y la desobediencia a las instrucciones dadas por los trabajadores de MUNDOLANDIA PARK. De producirse una expulsión, la misma no dará derecho al reembolso de la entrada, al existir causa objetiva de incumplimiento de las normas de funcionamiento.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Quinto.- PROTECCIÓN DE DATOS</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>De acuerdo con la Ley Orgánica de Protección de Datos de Carácter Personal, los datos personales que se recaban son los precisos para prestar el servicio solicitado en las condiciones convenidas y realizar la facturación del mismo. Tales datos serán incluidos y tratados en un fichero de usuarios cuyo administrador es MUNDOLANDIA PARK.</li>
                    <li>Los datos proporcionados se conservarán mientras se mantenga la relación comercial y durante el tiempo necesario para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Usted tiene derecho a obtener confirmación sobre si en MUNDOLANDIA PARK estamos tratando sus datos personales y por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando ya no sean necesarios.</li>
                    <li>Los interesados podrán ejercer su derecho de acceso, rectificación, cancelación u oposición de sus datos, dirigiéndose por escrito al responsable del Fichero: MUNDOLANDIA PARK.</li>
                </ul>
            </div>
        </>
    );
};

export default TermsPage;
