<template>
  <div class="wrapper">
    <div class="container">
      <div class="logout">
        <button @click="Logout">Logout</button>
      </div>
      <div class="settings">
        <h1>Coin settings</h1>
        <div class="coin-settings">
          <div class="formel">
            <div class="title">Coin status:</div>
            <el-checkbox v-model="settings.enabledcoin" border
              >Enable coin
            </el-checkbox>
            <el-button
              class="margin-l"
              icon="el-icon-check"
              @click="updateData('enabledcoin', settings.enabledcoin)"
            >
              Apply
            </el-button>
          </div>

          <div class="formel">
            <div class="title">Coin Name:</div>
            <el-input placeholder="Coin name" v-model="settings.coinname">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('coinname', settings.coinname)"
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Coin Address:</div>
            <el-input placeholder="Coin address" v-model="settings.coinaddress">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('coinaddress', settings.coinaddress)"
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Round number:</div>
            <el-input placeholder="Round number" v-model="settings.roundnumber">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('roundnumber', settings.roundnumber)"
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Next Round status:</div>
            <el-checkbox
              class="checkboxx"
              v-model="settings.starttimeunknown"
              border
            >
              Unknown dates
            </el-checkbox>
            <el-button
              class="margin-l"
              icon="el-icon-check"
              @click="updateData('starttimeunknown', settings.starttimeunknown)"
            >
              Apply
            </el-button>
          </div>

          <div class="formel">
            <div class="title">
              Round start time:
              <span v-if="settings.starttimeunknown">
                (not being taken into account)
              </span>
            </div>
            <el-date-picker
              v-model="settings.roundstarttime"
              type="datetime"
              placeholder="Select date and time"
              format="DD/MM/YYYY HH:mm:ss"
            >
            </el-date-picker>
            <button
              class="el-button el-button--default margin-l"
              @click="updateData('roundstarttime', settings.roundstarttime)"
            >
              Save
            </button>
          </div>

          <div class="formel">
            <div class="title">
              Round end time:
              <span v-if="settings.starttimeunknown">
                (not being taken into account)
              </span>
            </div>
            <el-date-picker
              v-model="settings.roundendtime"
              type="datetime"
              placeholder="Select date and time"
              format="DD/MM/YYYY HH:mm:ss"
            >
            </el-date-picker>
            <button
              class="el-button el-button--default margin-l"
              @click="updateData('roundendtime', settings.roundendtime)"
            >
              Save
            </button>
          </div>

          <div class="formel">
            <div class="title">bscscans URL:</div>
            <el-input placeholder="Coin name" v-model="settings.bscscansurl">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('bscscansurl', settings.bscscansurl)"
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Pankakeswap V2 URL:</div>
            <el-input
              placeholder="pankakeswapv2url"
              v-model="settings.pankakeswapv2url"
            >
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="
                    updateData('pankakeswapv2url', settings.pankakeswapv2url)
                  "
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Poocoin URL:</div>
            <el-input placeholder="poocoin url" v-model="settings.poocoinurl">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('poocoinurl', settings.poocoinurl)"
                >
                  Apply
                </el-button>
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Telegram URL:</div>
            <el-input placeholder="Telegram url" v-model="settings.telegramurl">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('telegramurl', settings.telegramurl)"
                >
                  Apply
                </el-button>
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Telegram announcements URL:</div>
            <el-input
              placeholder="Telegram announcements URL"
              v-model="settings.telegramannouncementsurl"
            >
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="
                    updateData(
                      'telegramannouncementsurl',
                      settings.telegramannouncementsurl
                    )
                  "
                >
                  Apply
                </el-button>
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Donations:</div>
            <el-input placeholder="donations" v-model="settings.donations">
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="updateData('donations', settings.donations)"
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Donations target:</div>
            <el-input
              placeholder="Donations target"
              v-model="settings.targetdonations"
            >
              <template #append>
                <el-button
                  icon="el-icon-check"
                  @click="
                    updateData('targetdonations', settings.targetdonations)
                  "
                >
                  Apply</el-button
                >
              </template>
            </el-input>
          </div>

          <div class="formel">
            <div class="title">Rounds history:</div>
            <el-input
              type="textarea"
              autosize
              placeholder="Donations target"
              v-model="settings.roundshistory"
            >
            </el-input>
            <el-button
              class="mt-16"
              icon="el-icon-check"
              @click="updateData('roundshistory', settings.roundshistory)"
            >
              Apply
            </el-button>
          </div>

          <div class="formel">
            <div class="title">Rounds features:</div>
            <el-input
              type="textarea"
              autosize
              placeholder="Rounds features"
              v-model="settings.roundsfeatures"
            >
            </el-input>
            <el-button
              class="mt-16"
              icon="el-icon-check"
              @click="updateData('roundsfeatures', settings.roundsfeatures)"
            >
              Apply
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRef } from "vue";
import firebase from "@/firebase";
import { appSettingsCollection } from "@/firebase";
import { useStore } from "vuex";
import { ElNotification } from "element-plus";

export default {
  setup() {
    const store = useStore();
    const settings = toRef(store.state, "settings");

    const updateData = (key, value) => {
      if (key === "roundstarttime" || key === "roundendtime") {
        value = new Date(value).getTime();
      }

      appSettingsCollection
        .doc("config")
        .update({
          [key]: value,
        })
        .then(function () {
          ElNotification({
            title: "Success",
            type: "success",
            message: `Data updated successfully`,
          });
        })
        .catch(function (error) {
          ElNotification({
            title: "Error",
            type: "error",
            message: `Data could not be saved. ${error}`,
          });
        });
    };

    const Logout = () => {
      firebase.auth().signOut();
    };

    return {
      settings,
      updateData,
      Logout,
      activeName: "first",
    };
  },
};
</script>
<style lang="scss" scoped>
.logout {
  text-align: right;
  border: none;
  margin-top: 25px;
  button {
    background: #f44336;
    border: none;
    color: white;
    padding: 11px 20px;
    cursor: pointer;
  }
}
h1 {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 20px;
}
.settings {
  max-width: 600px;
  margin: 160px auto 0 auto;
}
.formel {
  margin-bottom: 30px;
  .title {
    margin-bottom: 13px;
  }
}
.mt-16 {
  margin-top: 16px;
}
.margin-l {
  margin-left: 14px;
}
.save-btn {
}
</style>
