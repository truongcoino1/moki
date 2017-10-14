package ambe.com.vn.moki.adapters;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import ambe.com.vn.moki.fragments.ProductMainFragment;

/**
 * Created by AMBE on 16/09/2017.
 */

public class PagerTrangChuAdapter extends FragmentStatePagerAdapter {
    private int  numberOfTab;

    public PagerTrangChuAdapter(FragmentManager fm, int numberOfTab) {
        super(fm);
        this.numberOfTab = numberOfTab;
    }

    @Override
    public Fragment getItem(int position) {

        ProductMainFragment productMainFragment = new ProductMainFragment();
        Bundle bundle = new Bundle();
        bundle.putInt("ID", position);
        productMainFragment.setArguments(bundle);
        return productMainFragment;

    }


    @Override
    public int getCount() {
        return numberOfTab;
    }
}

