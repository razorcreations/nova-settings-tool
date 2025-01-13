<template>
    <DefaultSetting :setting="setting" :errors="errors || []">
        <div class="flex relative">
            <select
                :id="setting.key"
                :value="setting.value"
                @change="
                    $emit('update', {
                        key: setting.key,
                        value: $event.target.value,
                    })
                "
                class="w-full block form-control form-control-bordered form-input"
            >
                <option value="" selected>{{ setting.placeholder || __('Choose an option') }}</option>
                <option v-for="(label, option) in setting.options" :key="option" :value="option">
                    {{ __(label) }}
                </option>
            </select>
            <span class="pointer-events-none absolute inset-y-0 right-[11px] flex items-center">
                <IconArrow />
            </span>
        </div>
    </DefaultSetting>
</template>

<script>
import DefaultSetting from './DefaultSetting.vue';

export default {
    components: {
        DefaultSetting,
    },
    props: {
        setting: Object,
        errors: Array,
    },
    emits: ['update'],
};
</script>
