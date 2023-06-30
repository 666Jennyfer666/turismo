/* Creamos la base de datos */
create database BaseDatosCapacitacion

/* Creación de tablas */
/* Creamos las tablas que no dependen de otras */
create table Localidad (
id_localidad int identity (1,1),
nomLocalidad varchar (45),
activo  bit,
primary key (id_localidad)
)

create table Calificacion (
id_calificacion int identity (1,1),
calificacion varchar (50),
activo  bit,
primary key (id_calificacion)
)

/* Creamos la tabla que tiene id_ocalidad */
create table AtraccionVisitada (
id_atraccionVisitada int identity (1,1),
nomAtraccion varchar (50),
id_localidad int,
activo  bit,
primary key (id_atraccionVisitada),
foreign key (id_localidad) references Localidad(id_localidad)
)

/* Creamos la tabla de Comentarios que contiene las tablas anteriores */
create table Comentarios (
id_comentario int identity (1,1),
nomUsuario varchar (70),
apeUsuario varchar (70),
id_atraccionVisitada int,
id_calificacion int,
f_subida date,
h_subida time,
activo  bit,
primary key (id_comentario),
foreign key (id_atraccionVisitada) references AtraccionVisitada(id_atraccionVisitada),
foreign key (id_calificacion) references Calificacion(id_calificacion)
)

/* Creo la tabla de Notificaciones */
create table Notificaciones (
id_notificacion int identity (1,1),
nombreNotifi varchar (70),
apellidoNotifi varchar (70),
email varchar (70),
aceptoTermCond bit,
primary key (id_notificacion)
)

/* Creo la tabla de Consulta */
create table Consulta (
id_consulta int identity (1,1),
nomApeConsul varchar (120),
emailConsul varchar (100),
consulta varchar (520),
primary key (id_consulta)
)

/* Ponemos los datos de Localidad  */

insert into Localidad
(nomLocalidad)
values ('Villa Dolores')

insert into Localidad
(nomLocalidad)
values ('Mina Clavero')

insert into Localidad
(nomLocalidad)
values ('Villa Cura Brochero')

insert into Localidad
(nomLocalidad)
values ('Nono')

insert into Localidad
(nomLocalidad)
values ('Las calles')

insert into Localidad
(nomLocalidad)
values ('Las Rabonas')

insert into Localidad
(nomLocalidad)
values ('Los Hornillos')

insert into Localidad
(nomLocalidad)
values ('Quebrada de los Pozos')

insert into Localidad
(nomLocalidad)
values ('Villa de las Rosas')

insert into Localidad
(nomLocalidad)
values ('Los Molles')

insert into Localidad
(nomLocalidad)
values ('Las Tapias')

insert into Localidad
(nomLocalidad)
values ('Quebracho Ladeado')

insert into Localidad
(nomLocalidad)
values ('San Javier y Yacanto')

insert into Localidad
(nomLocalidad)
values ('Luyaba')

insert into Localidad
(nomLocalidad)
values ('Panaholma')

insert into Localidad
(nomLocalidad)
values ('San Carlos Mina')

insert into Localidad
(nomLocalidad)
values ('Salsacate')

insert into Localidad
(nomLocalidad)
values ('San Lorenzo')

insert into Localidad
(nomLocalidad)
values ('La Paz')

insert into Localidad
(nomLocalidad)
values ('San Pedro')

insert into Localidad
(nomLocalidad)
values ('San Jose')

insert into Localidad
(nomLocalidad)
values ('San Vicente')

insert into Localidad
(nomLocalidad)
values ('Las Chacras')

insert into Localidad
(nomLocalidad)
values ('Arroyos de los Patos')

insert into Localidad
(nomLocalidad)
values ('Los Cerrillos')

insert into Localidad
(nomLocalidad)
values ('La Poblacion')

/* Ponemos los datos de Atracciones  */

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Acqualandia Park Mina Clavero', 2)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Casino de Mina Clavero',2)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Festival de la Papa Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Feria Franca Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Eter Cine Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('El laverinto de Nono',4)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Feria de artesanos productores y elavoradores Villa de las Rosas',9)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Balneario Municipal Guasmara Villa de las Rosas',9)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Serpentario Machaqway Villa de las Rosas',9)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Golf Club Yacanto',13)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('ArtesaniasVicentino y producciones Yacanto',13)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Vicentino Don Zamora Yacanto',13)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Museo de piedra Cruz Sur Mina Clavero',2)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Anfiteatro Municipal de Mina Clavero',2)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Teatro Español Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Teatro Griego Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Museo de Villa Dolores',1)


insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Santuario nuestra Señora del transito Villa Cura Brochero',3)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Museo Brocheriano Villa Cura Brochero',3)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Museo Polifacético Rocsen Nono',4)


insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Iglesia de la Virgen de las Merced Layuba',14)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Monumento a la India Panaholma',15)


insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Capilla de las Palmas Salsacate',17)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('El Fogon San Pedro',18)


insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Capilla y Templos San Pedro',18)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Balneario Nido del Aguila Mina Clavero',2)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Cascada del toro muerto Mina Clavero',2)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Piedra Pintada Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Plaza Mitre Villa Dolores',1)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Plaza Centenario Villa Cura Brochero',3)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Granja Finca El Encanto Villa Cura Brochero',3)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Balneario la kiva Nono',4)


insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Paso de las tropas Nono',4)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Sendero de las Sierras Embrujadas las Rabonas',6)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Dique la viña Quebrada de los Pozos',8)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Dique Nivelador Boca del Río Las Tapias',11)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Sendero Quebrada de Ambrosio San Javier y Yacanto',13)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Río Panaholma',15)

insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Camino de los Volcanes Salsacate',17)


insert into AtraccionVisitada
(nomAtraccion,id_localidad)
values ('Senderismo San Lorenzo',16)
