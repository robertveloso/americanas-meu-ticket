#include <WiFi.h>
#include <PubSubClient.h>
 
#define PIN_LOCK     2
 
#define TOPICO         "topico_locker_americanas_1"
 
#define ID_MQTT  "locker_americanas_1"
const char* SSID = "NOME_DO_WIFI";
const char* PASSWORD = "SENHA_DO_WIFI"; 
 
const char* BROKER_MQTT = "mqtt.eclipse.org"; //URL do broker MQTT que se deseja utilizar
int BROKER_PORT = 1883; // Porta do Broker MQTT
   
WiFiClient espClient; 
PubSubClient MQTT(espClient); 
 

void initWiFi(void);
void initMQTT(void);
void mqtt_callback(char* topic, byte* payload, unsigned int length);
void reconnectMQTT(void);
void reconnectWiFi(void);
void VerificaConexoesWiFIEMQTT(void);
 
void initWiFi(void){
    delay(10);
    Serial.println("------Conexao WI-FI------");
    Serial.print("Conectando-se na rede: ");
    Serial.println(SSID);
    Serial.println("Aguarde");
      
    reconnectWiFi();
}

void initMQTT(void){
    MQTT.setServer(BROKER_MQTT, BROKER_PORT);
    MQTT.setCallback(mqtt_callback);
}

void mqtt_callback(char* topic, byte* payload, unsigned int length){
    String msg;
  
    for(int i = 0; i < length; i++) 
    {
       char c = (char)payload[i];
       msg += c;
    }
 
    Serial.print("Chegou a seguinte string via MQTT: ");
    Serial.println(msg);
    
    if (msg.equals("1"))
    {
        digitalWrite(PIN_LOCK, LOW);
        Serial.print("Abre Locker");
        delay(2000);
        digitalWrite(PIN_LOCK, HIGH);
        Serial.print("Fecha Locker");
        
    }

}

void reconnectMQTT(void){
    while (!MQTT.connected()) 
    {
        Serial.print("* Tentando se conectar ao Broker MQTT: ");
        Serial.println(BROKER_MQTT);
        if (MQTT.connect(ID_MQTT)) 
        {
            Serial.println("Conectado com sucesso ao broker MQTT!");
            MQTT.subscribe(TOPICO); 
        } 
        else
        {
            Serial.println("Falha ao reconectar no broker.");
            Serial.println("Havera nova tentatica de conexao em 2s");
            delay(2000);
        }
    }
}
 

void VerificaConexoesWiFIEMQTT(void){
    if (!MQTT.connected()) 
        reconnectMQTT(); 
      
     reconnectWiFi(); 
}

void reconnectWiFi(void){
    if (WiFi.status() == WL_CONNECTED)
        return;
          
    WiFi.begin(SSID, PASSWORD);
      
    while (WiFi.status() != WL_CONNECTED) 
    {
        delay(100);
        Serial.print(".");
    }
    
    Serial.println();
    Serial.print("Conectado com sucesso na rede ");
    Serial.print(SSID);
    Serial.println("IP obtido: ");
    Serial.println(WiFi.localIP());
}

void setup(){
    Serial.begin(115200);  

    pinMode(PIN_LOCK, OUTPUT);
    digitalWrite(PIN_LOCK,HIGH);

    initWiFi();
    initMQTT();
}

void loop(){

    VerificaConexoesWiFIEMQTT();

    MQTT.loop();

    delay(500);
}
